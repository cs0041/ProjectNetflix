import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { XIcon } from '@heroicons/react/outline'
type Props = {}

function Modal({}: Props) {
    const [movie, setMovie] = useRecoilState(movieState)
    const [showModal,setShowModal] = useRecoilState(modalState)
    const [trailer, setTrailer] = useState('')
    const [genres, setGenres] = useState<Genre[]>([])
    const handleCLose = () => {
        setShowModal(false)
    }

    useEffect(() => {
        if(!movie) return

        const fectchMovie = async () => {
            try {
               const data = await fetch(
                 `https://api.themoviedb.org/3/${
                   movie?.media_type === 'tv' ? 'tv' : 'movie'
                 }/${movie?.id}?api_key=${
                   process.env.NEXT_PUBLIC_API_KEY
                 }&language=en-US&append_to_response=videos`
               )
             
              const dataJson = await data.json()
              if (dataJson?.videos) {
                const index = dataJson.videos.results.findIndex((element: Element) => element.type === 'Trailer')
                setTrailer(dataJson.videos?.results[index]?.key)
              }

              if (dataJson?.genres) {
                setGenres(dataJson.genres)
              }
            } catch (error: any) {
              console.log(error.message)
            }
           }

           fectchMovie()
    }, [movie])
    
 
  return (
    <MuiModal open={showModal} onClose={handleCLose}>
        <>
            <button onClick={handleCLose} className="modalButton absolute right-5
            top-5 !z-40 h-9 w-9 border-none hover:bg-[#181818]">
                <XIcon  
                className='h-6 w-6'/>
            </button>
        </>
    </MuiModal>
  )
}

export default Modal