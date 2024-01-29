import React from 'react'
import Footer from "../../components/Footer/Footer"
import Eligibility from '../../components/Eligiblity/Eligibility'
import Header from '../../components/Header/Header'
import DonationForm from '../../components/Form/DonationForm'

function DonationPage() {
  return (
    <div>
        <Header/>
        <Eligibility/>
        <DonationForm/>
        <Footer/>
    </div>
  )
}

export default DonationPage