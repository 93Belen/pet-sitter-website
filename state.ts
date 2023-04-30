import {create} from 'zustand';
import {persist} from 'zustand/middleware';



type State = {
    renderReviews: boolean
    toggleRenderReviews: () => void
}


export const useRenderStore = create<State>()(
    persist(
        (set) => ({
            renderReviews: false,
            toggleRenderReviews: () => set((state) => ({renderReviews: !state.renderReviews})),
        }),
        {name: 'render-store'}
    )
)