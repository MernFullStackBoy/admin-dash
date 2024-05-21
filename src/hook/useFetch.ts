import { useEffect, useState } from "react"

const useFetch = (url: string) => {
    const [data, setData] = useState<object[]>([])

    const [loading, setLoading] = useState<boolean>(false)

    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(req => req.json)
            .then(data => setData([data]))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [url])

    return { data, error, loading }
}

export default useFetch