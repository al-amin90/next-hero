import styles from "./styles.module.css"
import Meals from '@/components/Meals';
import React from 'react';

const MealPage = () => {

    return (
        <div className='p-12'>
            <h1 className='text-3xl font-semibold text-red-500'>Choose your Meals</h1>
            <p className={styles.text_large}>choose meals of you choise by searching .......</p>
            
            <Meals/>
        </div>
    );
};

export default MealPage;