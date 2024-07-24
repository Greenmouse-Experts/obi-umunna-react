import { useMutation } from "@tanstack/react-query"
import { apply as applyApi} from "./api"
import {donate as donateApi} from "./api"
import { toast } from "react-toastify"

export const useApply = () => {
    const {mutate:apply, isLoading:isApplying} = useMutation({
        mutationFn:applyApi,
        onSuccess:() =>{
            toast.success("Application Successful")
        },
        onError: (err) => {
            console.log(err)
            toast.error("Application Failed")
        }
    })

    return { apply, isApplying}
}

export const useDonate = () => {
    const {mutate:donate, isLoading:isDonating} = useMutation({
        mutationFn: donateApi,
        onSuccess:() =>{
            toast.success("Donation Successful")
        },
        onError: (err) => {
            console.log(err)
            toast.error("Donation Failed")
        }
    })

    return { donate, isDonating}
}