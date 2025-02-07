import { create } from 'zustand';
import axios from 'axios';
import cookie from 'js-cookie';

const DashboardGet = create((set, get) => ({
    mainUrl: 'http://localhost:4000/api/v1',
    imgURl: 'http://localhost:4000',
    contacts: [],

    // Fetch Contacts with Authorization Token
    contactgetDataReq: async () => {
        try {
            const { mainUrl } = get();
            const token = cookie.get('token'); // Get token from cookies
            const res = await axios.get(`${mainUrl}/read-contact`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            set({ contacts: res.data.data });
        } catch (error) {
            console.error('Error fetching contact data:', error);
        }
    },

    isFormSubmit: false,
    LoginFormValue: { email: "", password: "" },

    // Handle Form Change
    LoginFormChange: (name, value) => {
        set((state) => ({
            LoginFormValue: {
                ...state.LoginFormValue,
                [name]: value
            }
        }))
    },

    isAuthenticated: !!cookie.get('token'),  // ✅ এখানে টোকেন চেক করা হচ্ছে

    isLogin: () => {
        return get().isAuthenticated;
    },

    updateAuthState: () => {
        set({ isAuthenticated: !!cookie.get('token') });
    },

    // Login Function
    SubmitLogin: async (loginForm) => {
        try {
            set({ isFormSubmit: true });
            const { mainUrl } = get();
            const res = await axios.post(`${mainUrl}/login`, loginForm);

            if (res.data.success === true) {
                cookie.set('token', res.data.token, { expires: 1, secure: false }); // Store token
                set({ isFormSubmit: false, isAuthenticated: true });  // ✅ স্টেট আপডেট
                return res;
            } else {
                return res;
            }
        } catch (e) {
            set({ isFormSubmit: false});  // ✅ স্টেট আপডেট
            console.error(e);
        }
    },

    // Logout Function
// Logout Function
    userLogOutRequest: async () => {
        try {
            const { mainUrl } = get();
            const token = cookie.get("token"); // টোকেন নিচ্ছি
            if (!token) {
                console.error("No token found!");
                return;
            }

            const res = await axios.get(`${mainUrl}/logout`, {
                headers: { Authorization: `Bearer ${token}` }, // টোকেন পাঠানো হচ্ছে
                withCredentials: true,
            });

            if (res.data.success) {
                console.log("Logout successful");

                cookie.remove("token");
                set({ isAuthenticated: false, contacts: [] });

                // 🔄 UI রিফ্রেশ করুন
                window.location.href = "/";
            } else {
                console.error("Logout failed:", res.data.message);
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    },


}));

export default DashboardGet;
