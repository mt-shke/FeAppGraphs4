import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import IndexPage from "./pages/indexPage";
import GraphsPage from "./pages/graphsPage";
import GraphsPage2 from "./pages/graphsPage/GraphsPage2";
import GraphsPage3 from "./pages/graphsPage/GraphsPage3";
import GraphsPage1 from "./pages/graphsPage/GraphsPage1";
import CustomerProvider from "./state/CustomerContext";
import "./index.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <IndexPage /> },
         {
            path: "/graphs",
            element: <GraphsPage />,
            errorElement: <ErrorPage />,
            children: [
               {
                  index: true,
                  element: <GraphsPage1 />,
                  path: "/graphs/1",
               },
               {
                  element: <GraphsPage2 />,
                  path: "/graphs/2",
               },
               {
                  element: <GraphsPage3 />,
                  path: "/graphs/3",
               },
            ],
         },
         {
            errorElement: <ErrorPage />,
            children: [{ index: true, element: <IndexPage /> }],
         },
         // {
         //    path: "transactions",
         //    element: <TransactionsPage />,
         //    errorElement: <ErrorPage />,
         // },
      ],
   },
]);

// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//    <QueryClientProvider client={queryClient}>
//       <CustomerProvider>
//          <h1>SOMETHING</h1>

//          {/* <RouterProvider router={router} /> */}
//       </CustomerProvider>
//    </QueryClientProvider>
// );

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <QueryClientProvider client={queryClient}>
      <CustomerProvider>
         <RouterProvider router={router} />
      </CustomerProvider>
   </QueryClientProvider>
);
