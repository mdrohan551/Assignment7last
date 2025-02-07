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


    // Initial State
    CreateBlog: {
        title: "",
        content: "",
        image: "",
        author: "",
        category: ""
    },

    // Handle Form Change
    FormChangeBlogs: (name, value) => {
        set((state) => ({
            CreateBlog: { ...state.CreateBlog, [name]: value }
        }));
    },

    multerImage: async (file) => {
        try {
            console.log("📤 Sending image to API:", file); // ✅ API তে পাঠানোর আগে চেক করুন

            const { mainUrl } = get();
            const token = cookie.get("token");
            if (!token) {
                console.error("❌ No token found! Please login again.");
                return null;
            }

            const formData = new FormData();
            formData.append("file", file); // Changed field name from 'image' to 'file'

            const res = await axios.post(`${mainUrl}/upload-file-multer`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.data.success && res.data.data.url) {
                console.log("✅ API response:", res.data.data.url); // ✅ API থেকে কি আসছে চেক করুন
                return res.data.data.url;
            } else {
                console.error("❌ Upload failed:", res.data.message);
                return null;
            }
        } catch (error) {
            console.error("❌ Upload error:", error.response?.data || error.message);
            return null;
        }
    },


    // Create Blog API (POST request)
// Create Blog API (POST request)
    CreateBLogsrequest: async (data) => {
        try {
            const token = cookie.get("token");
            const { mainUrl } = get(); // ✅ Make sure token is retrieved
            if (!token) {
                console.error("Token is missing! Please login again.");
                return { success: false, error: "Unauthorized" };
            }

            const res = await axios.post(`${mainUrl}/create-blog`, data, {
                headers: { Authorization: `Bearer ${token}` } // ✅ Send token in headers
            });

            return res.data;
        } catch (error) {
            console.error("Error creating blog:", error.response?.data || error.message);
            return { success: false, error: true };
        }
    }




}));

export default DashboardGet;
