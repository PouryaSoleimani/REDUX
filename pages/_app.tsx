import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { counterIncrementAction, counterDecrementAction } from "@/redux/actionCreators";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}
      onIncrement={() => store.dispatch(counterIncrementAction)}
      onDecrement={() => { store.dispatch(counterDecrementAction) }}
    >
      <Component {...pageProps} />
    </Provider>
  )
}
