
const useOnclickOutside = (ref, currentStat) => {
  useEffect( () => {
    document.title = `${dropdown}`
    const handler = (event) => {
      if(dropdown && ref.current && !ref.current.contains(event.target)){
        setDropdown(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [dropdown])
}