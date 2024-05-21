import { useEffect, useState } from "react"

const useFetch = (url: string) => {
    const [data, setData] = useState<object[]>([])

    const [loading, setLoading] = useState<boolean>(false)

    const [error, setError] = useState<boolean>(false)

    async function getData() {
        setLoading(true)
        const req = await fetch(url)

        if (req.status === 200) {
            const data = await req.json()

            setData([data])

            setLoading(false)
        } else {
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        getData()
    }, [url])

    return { data, error, loading }
}

export default useFetch