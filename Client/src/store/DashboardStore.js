import { create } from 'zustand';
import axios from 'axios';
import cookie from 'js-cookie';
import CreateBlogs from "../components/Dashboard/CreateBLogs/CreateBlogs.jsx";

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
                // 🔄 UI রিফ্রেশ করুন
                window.location.href = "/";
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
    // Initial State
    CreateHero: {
        title: "",
        subtile: "",
        image: ``,

    },
// Handle Form Change
    FormChangeBlogs: (name, value) => {
        set((state) => {
            // Update CreateBlog state with the new value
            const updatedBlog = { ...state.CreateBlog, [name]: value };

            // If the name is 'image', also update CreateHero.image and CreateAbout.image
            const updatedHero = name === 'image'
                ? { ...state.CreateHero, image: value }
                : state.CreateHero;

            const updatedAbout = name === 'image'
                ? { ...state.CreateAbout, image: value }
                : state.CreateAbout;

            return {
                CreateBlog: updatedBlog,
                CreateHero: updatedHero,
                CreateAbout: updatedAbout
            };
        });
    },


    multerImage: async (file) => {
        try {


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
    },


    // Handle Form Change
    FormChangeHero: (name, value) => {
        set((state) => ({
            CreateHero: { ...state.CreateHero, [name]: value }
        }));
    },

    CreateHeroRequest: async (herodata) => {
        try {
            const token = cookie.get("token");
            const { mainUrl } = get(); // ✅ Make sure token is retrieved
            if (!token) {
                console.error("Token is missing! Please login again.");
                return { success: false, error: "Unauthorized" };
            }
            const res = await axios.post(`${mainUrl}/create-slider`, herodata, {
                headers: { Authorization: `Bearer ${token}` } // ✅ Send token in headers
            });

            return res.data;
        } catch (error) {
            console.error("Error creating blog:", error.response?.data || error.message);
            return { success: false, error: true };
        }
    },




































    // ============================================
    CreateAbout: {
        name: "",
        description: "",
        image: "",
        socialLinks: {
            facebook: "",
            linkedin: "",
            twitter: ""
        }
    },

    // 🔹 Form Change Function
    FormChangeAbout: (name, value) => {
        set((state) => {
            // যদি সোশ্যাল লিংক আপডেট হয়, তাহলে সেটাকে আলাদা ভাবে হ্যান্ডেল করবো
            if (name.startsWith("socialLinks.")) {
                const key = name.split(".")[1]; // socialLinks.facebook -> facebook
                return {
                    CreateAbout: {
                        ...state.CreateAbout,
                        socialLinks: {
                            ...state.CreateAbout.socialLinks,
                            [key]: value
                        }
                    }
                };
            }

            // অন্য সব ক্ষেত্রের জন্য সাধারণ আপডেট
            return {
                CreateAbout: {
                    ...state.CreateAbout,
                    [name]: value
                }
            };
        });
    },

    // Handle Social Links Update
    UpdateSocialLinks: (platform, value) => {
        set((state) => ({
            CreateAbout: {
                ...state.CreateAbout,
                socialLinks: { ...state.CreateAbout.socialLinks, [platform]: value }
            }
        }));
    },


    // Create About API Request
    CreateAboutRequest: async (CreateAbout) => {
        try {
            const {  mainUrl } = get();
            const token = cookie.get("token");

            if (!token) {
                console.error("Token is missing! Please login again.");
                return { success: false, error: "Unauthorized" };
            }

            const res = await axios.post(`${mainUrl}/create-about`, CreateAbout, {
                headers: { Authorization: `Bearer ${token}` }
            });

            return res.data;
        } catch (error) {
            console.error("Error creating about section:", error.response?.data || error.message);
            return { success: false, error: true };
        }
    }
}));

export default DashboardGet;
