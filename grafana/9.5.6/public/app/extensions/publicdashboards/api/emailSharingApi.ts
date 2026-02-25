import { notifyApp } from 'app/core/actions';
import { createSuccessNotification } from 'app/core/copy/appNotification';

import { publicDashboardApi } from '../../../features/dashboard/api/publicDashboardApi';

const emailSharingApi = publicDashboardApi.injectEndpoints({
  endpoints: (builder) => ({
    requestAccess: builder.mutation<void, { email: string; accessToken: string }>({
      query: (params) => ({
        url: '/public/dashboards/share/request-access',
        method: 'POST',
        data: params,
      }),
    }),
    addRecipient: builder.mutation<void, { recipient: string; dashboardUid: string; uid: string }>({
      query: ({ recipient, uid }) => ({
        url: `/public-dashboards/${uid}/share/recipients`,
        method: 'POST',
        data: { recipient },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(notifyApp(createSuccessNotification('Invite sent!')));
      },
      invalidatesTags: (result, error, { dashboardUid }) => [{ type: 'PublicDashboard', id: dashboardUid }],
    }),
    deleteRecipient: builder.mutation<void, { recipientUid: string; dashboardUid: string; uid: string }>({
      query: ({ uid, recipientUid }) => ({
        url: `/public-dashboards/${uid}/share/recipients/${recipientUid}`,
        method: 'DELETE',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(notifyApp(createSuccessNotification('User revoked')));
      },
      invalidatesTags: (result, error, { dashboardUid }) => [{ type: 'PublicDashboard', id: dashboardUid }],
    }),
    reshareAccessToRecipient: builder.mutation<void, { recipientUid: string; uid: string }>({
      query: ({ uid, recipientUid }) => ({
        url: `/public-dashboards/${uid}/share/recipients/${recipientUid}`,
        method: 'PATCH',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(notifyApp(createSuccessNotification('Invite resent!')));
      },
    }),
  }),
  overrideExisting: true,
});

export const { useRequestAccessMutation } = emailSharingApi;
