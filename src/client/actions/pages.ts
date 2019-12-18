import { State } from '../reducers/pages';

export type Actions =
  | ReturnType<typeof setBaseUrl>
  | ReturnType<typeof resetPageStatus>
  | ReturnType<typeof loadAppProcess>
  | ReturnType<typeof loadAppProcessSuccess>
  | ReturnType<typeof loadAppProcessFailure>
  | ReturnType<typeof loadTopPage>
  | ReturnType<typeof loadTopPageSuccess>
  | ReturnType<typeof loadTopPageFailure>;

export const SET_BASE_URL = 'SET_BASE_URL';
export const setBaseUrl = (baseUrl: State['baseUrl']) =>
  ({
    type: SET_BASE_URL,
    payload: {
      baseUrl
    }
  } as const);

export const RESET_PAGES_STATUS = 'RESET_PAGES_STATUS';
export const resetPageStatus = () =>
  ({
    type: RESET_PAGES_STATUS
  } as const);

export const LOAD_APP_PROCESS = 'LOAD_APP_PROCESS';
export const loadAppProcess = () =>
  ({
    type: LOAD_APP_PROCESS
  } as const);

export const LOAD_APP_PROCESS_SUCCESS = 'LOAD_APP_PROCESS_SUCCESS';
export const loadAppProcessSuccess = () =>
  ({
    type: LOAD_APP_PROCESS_SUCCESS
  } as const);

export const LOAD_APP_PROCESS_FAILURE = 'LOAD_APP_PROCESS_FAILURE';
export const loadAppProcessFailure = (err: Error) =>
  ({
    type: LOAD_APP_PROCESS_FAILURE,
    payload: {
      err
    }
  } as const);

export const LOAD_TOP_PAGE = 'LOAD_TOP_PAGE';
export const loadTopPage = () =>
  ({
    type: LOAD_TOP_PAGE
  } as const);

export const LOAD_TOP_PAGE_SUCCESS = 'LOAD_TOP_PAGE_SUCCESS';
export const loadTopPageSuccess = () =>
  ({
    type: LOAD_TOP_PAGE_SUCCESS
  } as const);

export const LOAD_TOP_PAGE_FAILURE = 'LOAD_TOP_PAGE_FAILURE';
export const loadTopPageFailure = (err: Error) =>
  ({
    type: LOAD_TOP_PAGE_FAILURE,
    payload: {
      err
    }
  } as const);
