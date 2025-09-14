import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams} from 'react-router-dom'
import { useEffect } from 'react'

export default function Verify() {

    const {navigate,token,setCartItems,backendUrl}=useContext(ShopContext)
    const [searchParams,setSearchParams]=useSearchParams()

    const success=searchParams.get('sucess')
    const orderId=searchParams.get('orderId')

    useEffect(()=>{
        try{
            if(!token){
                return null
            }
            
        }
        catch(error){

        }
    },[])

  return (
    <div>

        
      
    </div>
  )
}
