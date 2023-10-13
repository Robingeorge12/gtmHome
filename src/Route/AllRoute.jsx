import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomServiceMenu from '../Components/CustomServiceMenu/CustomServiceMenu'
import BlogPage from '../Components/BlogPage/BlogPage'
import HomeAppendPage from '../Components/HomeAppendPage/HomeAppendPage'
import SectionOne from '../Components/SectionOne/SectionOne'
import Feature from '../Components/Feature/Feature'
import SearchProduct from '../Components/SearchProduct/SearchProduct'
import SearchFilterSideBar from '../Components/SearchFilterSideBar/SearchFilterSideBar'
import SearchProductInput from '../Components/SearchProductInput/SearchProductInput'
import About from '../Components/About/About'
import Signup from '../Components/Signup/Signup'
import Login from '../Components/LogIn/Login'

function AllRoute() {
  return (
    <div>
<Routes>
<Route path="/" element={<HomeAppendPage />} />
<Route path="/blogpage" element={<BlogPage />} />
<Route path="/sectionone" element={<SectionOne />} />
<Route path="/feature" element={<Feature />} />
<Route path="/searchproduct" element={<SearchProduct />} />
<Route path="/searchfilter" element={<SearchFilterSideBar />} />
<Route path="/searchip" element={<SearchProductInput />} />
<Route path="/about" element={<About />} />
<Route path='/signup' element={<Signup />} />
<Route path='/log' element={<Login />} />
  
</Routes>

    </div>
  )
}

export default AllRoute