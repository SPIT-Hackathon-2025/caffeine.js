import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import OnboardingPage from "./pages/OnboardingPage";
import Tasks from "./pages/Tasks";
import Create from "./pages/Create";
import CreateForm from "./pages/CreateForm";
import TextEditor from "./components/TextEditor";
import { useEffect } from "react";
import VideoCall from "./pages/VideoCall";
import VideoReview from "./pages/VideoReview";
import Calender from "./pages/Calender";

const App = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />

            {/* Private Nested Routes */}
            <Route path="/" element={<AppLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-tasks" element={<Tasks />} />
                <Route path="/create" element={<Create />} />
                <Route path="/create/:category" element={<CreateForm />} />
                <Route path="/create/:category/text-editor" element={<TextEditor />} />
                <Route path="/email" element={<Email />} />
                <Route path="/video-meet" element={<VideoCall />} />
                <Route path="/video-review" element={<VideoReview />} /> 
                <Route path="/calendar" element={<Calender />} />
            </Route>
        </Routes>
    );
};

export default App;


const Dashboard = () => {
    useEffect(() => {
        window.location.href = "http://localhost:5175/dashboard";
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            Loading...
        </div>
    );
};