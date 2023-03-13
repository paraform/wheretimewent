import * as React from "react"

import {
  SignedIn,
  SignedOut,
  useAuth,
  useSignIn,
  useUser,
} from "@clerk/clerk-expo"
import { useRouter } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { tv } from "@wtw/ui"

import { Button, Input, Text, View } from "../components"
import { RootStackScreenProps } from "../types"
import { log } from "../utils/logger"
import { trpc } from "../utils/trpc"

const button = tv({
  base: "border border-solid",
  variants: {
    kind: {
      solid: "bg-black text-white border-black",
      outlined: "bg-transparent text-black border-black",
      ghost: "",
      link: "",
    },
    size: {
      sm: "px-3 py-2",
      md: "px-4 py-4",
      lg: "px-5 py-6",
    },
  },
  defaultVariants: {
    kind: "solid",
    size: "md",
  },
})

export default function Home(props: RootStackScreenProps<"Home">) {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const [emailAddress, setEmailAddress] = React.useState("")
  const [password, setPassword] = React.useState("")

  const { isLoaded, signIn, setSession } = useSignIn()

  if (!setSession) return null
  if (!isLoaded) return null

  const redirectIfSignedIn = async () => {
    if (signIn.status == "complete") {
      router.push("/")
    }
  }

  const handleEmailSignInWithPress = async (emailAddress, password) => {
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      })

      await setSession(completeSignIn.createdSessionId)
      await redirectIfSignedIn()
    } catch (err: any) {
      console.log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err)
      // log("Error:> " + err?.status || "")
      // log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err)
    }
  }

  return (
    <View
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <SignedIn>
        <Dashboard {...props} />
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
              <Text className={button()}>Sign in</Text>
            </Button>
          </View>
        </View>
      </SignedOut>
    </View>
  )
}

function Dashboard({ navigation }: RootStackScreenProps<"Home">) {
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
