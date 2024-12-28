import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContentItem {
  id: number
  type: 'image' | 'video'
  src: string
  title: string
  likes: number
  dislikes: number
}

interface ExploreState {
  dailyClaim: {
    day: number
    claimed: boolean
  }
  content: ContentItem[]
  comments: {
    [videoId: number]: string[]
  }
}

const initialState: ExploreState = {
  dailyClaim: {
    day: 1,
    claimed: false,
  },
  content: [
    { id: 1, type: 'image', src: '/placeholder.svg?height=200&width=300', title: 'Amazing Landscape', likes: 120, dislikes: 5 },
    { id: 2, type: 'video', src: '/placeholder.mp4', title: 'Funny Cat Video', likes: 250, dislikes: 10 },
    { id: 3, type: 'image', src: '/placeholder.svg?height=200&width=300', title: 'Delicious Food', likes: 80, dislikes: 2 },
    { id: 4, type: 'video', src: '/placeholder.mp4', title: 'Travel Vlog', likes: 180, dislikes: 8 },
  ],
  comments: {},
}

const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    claimDaily: (state) => {
      state.dailyClaim.claimed = true
      state.dailyClaim.day += 1
    },
    addContent: (state, action: PayloadAction<Omit<ContentItem, 'id' | 'likes' | 'dislikes'>>) => {
      const newId = Math.max(...state.content.map(item => item.id)) + 1
      state.content.push({ ...action.payload, id: newId, likes: 0, dislikes: 0 })
    },
    likeContent: (state, action: PayloadAction<number>) => {
      const content = state.content.find(item => item.id === action.payload)
      if (content) content.likes += 1
    },
    dislikeContent: (state, action: PayloadAction<number>) => {
      const content = state.content.find(item => item.id === action.payload)
      if (content) content.dislikes += 1
    },
    addComment: (state, action: PayloadAction<{ videoId: number; comment: string }>) => {
      const { videoId, comment } = action.payload
      if (!state.comments[videoId]) {
        state.comments[videoId] = []
      }
      state.comments[videoId].push(comment)
    },
  },
})

export const { claimDaily, addContent, likeContent, dislikeContent, addComment } = exploreSlice.actions
export default exploreSlice.reducer

