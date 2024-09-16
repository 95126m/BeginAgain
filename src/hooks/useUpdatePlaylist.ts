// GET - useQuery
// POST, PUT, PATCH, DELETE - useMutation

import { useMutation } from '@tanstack/react-query'
import { getFirestore, collection, doc, updateDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export interface Playlist {
  id: string
  urls: string[]
  title: string
  description: string
  isPublic: boolean
  userId: string
  createdAt: string
}

export const useUpdatePlaylist = () => {
  return useMutation({
    mutationFn: async (playlist: Playlist) => {
      const db = getFirestore()
      const auth = getAuth()
      const user = auth.currentUser
      const coll = collection(db, 'Playlists')
      const docRef = doc(coll, playlist.id)
      if (user && playlist.userId === user.uid) {
        await updateDoc(docRef, {
          title: '박영웅'
        })
      }
    }
  })
}
