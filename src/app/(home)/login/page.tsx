import Authenticate from "@/components/public/authenticate"

interface PageProps{
  searchParams: Promise<{
    error: string
  }>
}

export default async function Login({searchParams}: PageProps) {
  const error = (await searchParams).error
  return (<Authenticate error={error}/>);
}
