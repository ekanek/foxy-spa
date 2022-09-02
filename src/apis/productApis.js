import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_DOMAIN } from '../lib/constants';

// import {
//   incrementOrDecrementProductFetched,
//   incrementOrDecrementProductFetching,
// } from 'features/carts/cartSlice';

const CreateBaseQuery = {
  baseUrl: API_DOMAIN,
  prepareHeaders: (headers) => {
    return headers;
  },
};

// Define a service using a base URL and expected endpoints
export const api = createApi({
  baseQuery: fetchBaseQuery(CreateBaseQuery),
  tagTypes: ['Carts', 'Orders'],
  endpoints: (builder) => ({
    // sendOtp: builder.mutation({
    //   query({ mobile, viaWhatsapp = false }) {
    //     const body = {
    //       user: {
    //         country_code: '91',
    //         phone_number: mobile,
    //       },
    //     };
    //     if (viaWhatsapp) {
    //       body.via = 'whatsapp';
    //     }
    //     return {
    //       url: '/api/v2/users/send_otp',
    //       method: 'POST',
    //       body,
    //     };
    //   },
    // }),
    // verifyOtp: builder.mutation({
    //   query({ mobile, otp }) {
    //     const body = {
    //       user: {
    //         country_code: '91',
    //         phone_number: mobile,
    //         otp,
    //       },
    //     };
    //     return {
    //       url: '/api/v2/users/verify.json',
    //       method: 'POST',
    //       body,
    //     };
    //   },
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     try {
    //       const { data = {} } = await queryFulfilled;
    //       const { user = {} } = data;
    //       dispatch(setAuthUser(user));
    //     } catch (err) {
    //       // error handled on the api level
    //     }
    //   },
    // }),
    // getTopBrands: builder.query({
    //   query: () => '/api/v4/lists/top-brands.json',
    // }),
    // getDeals: builder.query({
    //   query: () => '/api/v4/lists/store-page.json',
    // }),
    // getBrandItemDetails: builder.query({
    //   query: (slug) => slug,
    // }),
    // getCartItems: builder.query({
    //   query: () => '/api/v2/cart_items?source=cart&platform=app&os=android',
    //   providesTags: ['Carts'],
    // }),
    // incrementOrDecrementCartItem: builder.mutation({
    //   query: (body) => ({
    //     url: '/api/v1/cart_items/increment?source=cart&platform=app&os=android',
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags(result, error) {
    //     if (error) return [];
    //     return ['Carts'];
    //   },
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     dispatch(incrementOrDecrementProductFetching());
    //     try {
    //       await queryFulfilled;
    //     } catch (err) {
    //       // error handled on the api level
    //     } finally {
    //       dispatch(incrementOrDecrementProductFetched());
    //     }
    //   },
    // }),
    // createOrder: builder.mutation({
    //   query: (authToken) => ({
    //     url: '/api/v1/orders',
    //     method: 'POST',
    //     body: {
    //       auth_token: authToken,
    //       order: {
    //         address_id: '537731',
    //       },
    //       payment_method: 'cod',
    //       contact_less: true,
    //       payment_method_value: {},
    //       pg: '',
    //       save_payment_method: true,
    //     },
    //   }),
    //   invalidatesTags: ['Carts', 'Orders'],
    // }),
    // getOrders: builder.query({
    //   query: () => '/api/v1/orders',
    //   providesTags: ['Orders'],
    // }),
    // getSchemes: builder.query({
    //   query: () => '/api/v4/lists/store-page.json',
    // }),
    getProductDetails: builder.query({
      query: (slug) => slug,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  // useGetTopBrandsQuery,
  // useGetDealsQuery,
  // useGetBrandItemDetailsQuery,
  // useGetCartItemsQuery,
  // useIncrementOrDecrementCartItemMutation,
  // useCreateOrderMutation,
  // useGetOrdersQuery,
  // useGetSchemesQuery,
  useGetProductDetailsQuery,
  // useSendOtpMutation,
  // useVerifyOtpMutation,
} = api;
