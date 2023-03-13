import Verification from "./verification"

type PageProps = {}

function Page(props: PageProps) {
  return (
    <div className="flex flex-col gap-2">
      <Verification />
    </div>
  )
}

export default Page
