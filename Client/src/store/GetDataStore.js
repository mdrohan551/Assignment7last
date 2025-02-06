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


    ServiceDetails:[],
    ServiceDetailsRequest:async (slug) => {
       try {
           const { mainUrl } = get();
           const res = await axios.get(`${mainUrl}/read-service`);
           set({ ServiceDetails: res.data });
       }catch(error) {
           console.error('Error fetching service data:', error);
       }

    },
    isFormSubmit: false,
    ContactForm: {
        name: "",
        subject: "",
        Email: "",
        Message: "",
    },
    FormChange: (name, value) => {
        set((state) => ({
            ContactForm: {
                ...state.ContactForm,
                [name]: value,
            },
        }));
    },

    ContactFormRequest: async (data) => {
        try {
            set({ isFormSubmit: true });  // Indicate form submission is in progress
            const { mainUrl } = get();

            // Use POST method for submitting form data
            const res = await axios.post(`${mainUrl}/create-contact`, data);

            // If the response indicates success, clear the form and return the data
            if (res.data.success === true) {
                set({
                    ContactForm: {
                        name: "",
                        subject: "",
                        email: "",
                        message: "",
                    },
                });
                set({ isFormSubmit: false });
                return res.data;
            } else {
                set({ isFormSubmit: false });  // Reset the form submission state on failure
                return res.data;  // If not successful, return the response
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            set({ isFormSubmit: false });  // Reset the form submission state on error
            // Optionally, show a toast or alert to inform the user of the error
        }
    },


    TeamDetails:{},
    TeamDetailsRequest:async () => {
        try {
            const { mainUrl } = get();
            const res = await axios.get(`${mainUrl}/read-team`);
            set({ TeamDetails: res.data });
        }catch(error) {
            console.error('Error fetching team data:', error);
        }

    },




}));

export default useGetDataStore;
