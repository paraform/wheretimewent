import * as React from "react"

import {
  SignedIn,
  SignedOut,
  useAuth,
  useSignIn,
  useUser,
} from "@clerk/clerk-expo"
import { useRouter } from "expo-router"

import { Button, Input, Text, View } from "../components"
import { RootStackScreenProps } from "../types"
import { log } from "../utils/logger"
import { trpc } from "../utils/trpc"

export default function Home(props: RootStackScreenProps<"MyProfile">) {
  const [emailAddress, setEmailAddress] = React.useState("")
  const [password, setPassword] = React.useState("")

  const { isLoaded, signIn, setSession } = useSignIn()
  if (!setSession) return null
  if (!isLoaded) return null

  const handleEmailSignInWithPress = async (emailAddress, password) => {
    await signIn.create({
      identifier: emailAddress,
      password,
    })
  }

  return (
    <>
      <SignedIn>
        <MyProfileScreen {...props} />
      </SignedIn>
      <SignedOut>
        <View>
          <Text>Unauthorized</Text>
          <View className="flex flex-col gap-2 p-8">
            <Input
              value={emailAddress}
              placeholder="Email"
              onChangeText={(text) => {
                setEmailAddress(text)
              }}
            />
            <Input
              value={password}
              placeholder="Password"
              onChangeText={(text) => {
                setPassword(text)
              }}
              textContentType="password"
              secureTextEntry
            />
            <Button
              onPress={() => {
                handleEmailSignInWithPress(emailAddress, password)
              }}
            >
              <Text>Sign in</Text>
            </Button>
          </View>
        </View>
      </SignedOut>
    </>
  )
}

function MyProfileScreen({ navigation }: RootStackScreenProps<"MyProfile">) {
  const { replace } = useRouter()
  const { getToken, signOut } = useAuth()
  const { user } = useUser()

  const [sessionToken, setSessionToken] = React.useState("")

  const onSignOutPress = async () => {
    try {
      await signOut()
      replace("/")
    } catch (err: any) {
      log("Error:> " + err?.status || "")
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err)
    }
  }

  React.useEffect(() => {
    const scheduler = setInterval(async () => {
      const token = await getToken()
      setSessionToken(token as string)
    }, 1000)

    return () => clearInterval(scheduler)
  }, [getToken])

  return (
    <View>
      <Text>Hello {user?.firstName}</Text>
      <Button onPress={onSignOutPress}>
        <Text>Sign out</Text>
      </Button>
      <Text>{sessionToken}</Text>
      <TaskList />
    </View>
  )
}

function TaskList() {
  const { data, isLoading, error } = trpc.task.byUser.useQuery()

  React.useEffect(() => {
    console.log(data)
  }, [data, isLoading])

  if (error) {
    return <Text className="text-slate-800">{error.message}</Text>
  }

  return (
    <View>
      {data?.map((task) => (
        <Text key={task.id}>{task.name}</Text>
      ))}
    </View>
  )
}
