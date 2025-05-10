import {atom, useRecoilState} from 'recoil';

export const loaderStateKey = 'udealLoaderState';

export const loaderState = atom({
  key: loaderStateKey,
  default: false,
});

export const useLoader = () => {
  const [isLoading, setShowLoader] = useRecoilState(loaderState);

  const showLoader = () => {
    setShowLoader(true);
  };

  const hideLoader = () => {
    setShowLoader(false);
  };
  return {
    isLoading,
    showLoader,
    hideLoader,
  };
};
