import { useAccount } from "@lib/context/account-context"
import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement, useEffect } from "react"
import { NextPageWithLayout } from "types/global"
import { useRouter } from "next/router"
const Home: NextPageWithLayout = () => {
  const { customer, retrievingCustomer } = useAccount()
  const router = useRouter()
  useEffect(() => {
    console.log(customer)
    if (!customer) {
      router.push("/account/login")
    }
  }, [customer, retrievingCustomer, router])
  return (
    <>
      <Head
        title="Home"
        description="The Real Hennie's - Beste kuier in Suid Afrika!"
      />
      <Hero />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
