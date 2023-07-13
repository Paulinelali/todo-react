import {}

const useOnclickOutside = (ref, currentState, updater) => {
  useEffect( () => {
    const handler = (event) => {
      if(currentState && ref.current && !ref.current.contains(event.target)){
        updater(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [ref, currentState, updater])
}

export default useOnclickOutside;