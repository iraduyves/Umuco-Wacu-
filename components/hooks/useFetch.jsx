import { View, Text } from 'react-native'
import React,{useEffect,useState} from 'react'


const url = 'https://d89b-196-12-144-113.ngrok-free.app'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const useFetch = () => {
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchProducts = async () => {
        try {
            const response = await fetch(`${url}/posts`);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
            console.log('Error:', error);
            if (response) {
                console.log('Response:', await response.text());
            }
        }
    };
    
    const fetchUsers = async () => {
        try {
            const response = await fetch(`${url}/profile`);
            const dataa = await response.json();
            setUser(dataa);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
            console.log('Error:', error);
            if (response) {
                console.log('Response:', await response.text());
            }
        }
    };
    
    

    const refetch = async () => {
        setLoading(true)
        await fetchProducts(),
        await fetchProducts()
    }
  
    useEffect(()=>{
        fetchProducts()
        fetchUsers()
    },[])

    // console.log("data",data);
  return (
    {data,user,loading, error, refetch}
  )
}

export default useFetch