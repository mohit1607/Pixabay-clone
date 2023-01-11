import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Button, Card, PaginationBtn, Nav, useNetwork } from '../components'


export default function Pics() {

    const [page, setPage] = useState(1)
    const [pages, setPages] = useState([])
    // search functionality will be there where there is data fetching.
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    // const [search, setSearch] = useState("")
    // this useQuery will do some meddling with our fetching function so if you want to check 
    // in case of pagination then pass anything in the feching function as paramenters and console.log it.
    // this will show the passed character string and the thing that is unique to it.
    const { data,
        isLoading,
        isError,
        isFetched,
        error
    } = useQuery(["pics", page, search, category], async () => { // here array is like dependency array.
        const data = await axios.get('https://pixabay.com/api/', {
            params: {
                key: '17392926-1008cec1ed6e3cf7088aafc7e',
                page: page,
                q: search,
                category: category
            }
        })
        return data
    }, {
        keepPreviousData: true
    })
    // you know what is this keep previous data so that everytime the new page is set then there is no
    // need to rerender all the things all things will render with blink of eye by caching it and 
    // it will improve user experience also.

    const PaginationArray = () => {
        let arr = []
        setPages([])
        for (let i = page; i < page + 4; i++) {
            arr.push(i)
        } // array should be preemptied for new pages
        setPages(arr)
    }

    const Prev = () => {
        setPage(prev => {
            if (page === 1) {
                return prev
            }
            return prev - 1
        })
    }
    const Next = () => setPage(prev => prev + 1)

    if (isError) {
        console.log(error)
        alert('something went wrong')
    }


    useEffect(() => {
        PaginationArray()
    }, [])
    useEffect(() => {
        PaginationArray()
    }, [page])

    // use INfinite query will fail because the page is not included in the array.

  
   
    return (
        <>
            <Nav setSearch={setSearch} setCategory={setCategory} setPage={setPage} />
            <div className='px-[5%] overflow-auto'>
                {
                    isLoading && <div className='text-2xl font-semibold text-center'>Loading...</div>
                }
                <div className='w-full masonry mb-8 overflow-auto'>
                    {
                        isFetched && data.data.hits?.map(curr => {
                            return (
                                <Card image={curr.webformatURL}
                                    height={curr.webfromatHeight}
                                    width={curr.webfromatWidth}
                                    userImageUrl={curr.userImageURL}
                                    userName={curr.user}
                                    likes={curr.likes}
                                ></Card>
                            )
                        })
                    }
                </div>
                <div className="flex items-center justify-between w-full h-32 mx-auto mb-8">
                    <Button onClick={Prev}>&lt; Prev</Button>
                    <div className='flex gap-2'>
                        {
                            pages?.map(curr => {
                                return (
                                    <PaginationBtn pageNo={curr}
                                        setPage={setPage}
                                        currPage={page}
                                    />
                                )
                            })
                        }
                    </div>
                    <Button onClick={Next}>Next &gt;</Button>
                </div>
            </div>
        </>
    )
}
