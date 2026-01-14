import React from "react";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import GenericPage from "./pages/GenericPage.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider> */}
      {/* <Toaster /> */}
      {/* <Sonner /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analytics" element={<GenericPage title="Analytics" />} />
          <Route path="/analytics-2" element={<GenericPage title="Analytics 2" />} />
          <Route path="/analytics-3" element={<GenericPage title="Analytics 3" />} />
          <Route path="/analytics-4" element={<GenericPage title="Analytics 4" />} />
          <Route path="/dashboard" element={<GenericPage title="Dashboard" />} />
          <Route path="/collaboration" element={<GenericPage title="Collaboration" />} />
          <Route path="/automation" element={<GenericPage title="Automation" />} />
          <Route path="/integration" element={<GenericPage title="Integration" />} />
          <Route path="/security" element={<GenericPage title="Security" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

export default App;