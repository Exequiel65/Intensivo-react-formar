import React from 'react'
import SearchForm from '../../components/SearchForm'
import DrinkList from '../../components/DrinksList'
import DrinkDetailModal from '../../components/DrinkModal'
import { DrinksProvider } from '../../context/DrinksProvider'

export default function Home() {
    return (
        <div>
            <SearchForm/>
            <DrinkList />
            <DrinkDetailModal />

        </div>
    )
}
