import { create } from 'zustand';
import axios from 'axios';

const useGetDataStore = create((set, get) => ({  // 'get' allows accessing state values
    mainUrl: 'http://localhost:4000/api/v1',  // API base URL
    imgURl: 'http://localhost:4000',  // API base URL
    homeData: {},  // Initial state
    homeDataReq: async () => {
        try {
            const { mainUrl } = get();  // Get mainUrl from state
            const res = await axios.get(`${mainUrl}/read-slider`);
            set({ homeData: res.data });  // Update state with response data
        } catch (error) {
            console.error('Error fetching home data:', error);
        }
    },

    BlogData:{},
    BlogDataReq:async () => {
       try {
           const {mainUrl} = get();
           const res = await axios.get(`${mainUrl}/read-blog-home`);
           set({ BlogData: res.data });
       }catch(error) {
           console.error('Error fetching blog data:', error);
       }

    },

    detailsBLog:[],
    BLogDetailsRequest:async (slug) => {
       try {
           const { mainUrl } = get();
           const res = await axios.get(`${mainUrl}/read-single-blog/${slug}`);
           set({ detailsBLog: res.data });
       }catch(error) {
           console.error('Error fetching blog data:', error);
       }

    },







}));

export default useGetDataStore;
