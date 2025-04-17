import styles from './app.module.css';
import data from './data.json';
import { useState} from 'react';

export const App = () => {
	const [steps]= useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const clickBack =  () =>{
		if(activeIndex > 0) {
		setActiveIndex((prev) => prev - 1);
}
	};

	const clickForward = () => {
		 setActiveIndex((prev)=> prev + 1);
	};

	const clickRestart = () => {
		setActiveIndex(0);
	};

const isFirstStep = activeIndex === 0;
const isLastTep = activeIndex === steps.length - 1;




	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({title,id}, index) => (
							<li
							key={id}
							 className={
								styles['steps-item'] +
								(index === activeIndex ? ` ${styles.active}` : '') +
								(index < activeIndex ? ` ${styles.done}` : '')
							 }
							 >

							<button
							className={styles['steps-item-button']}
							onClick={()=> setActiveIndex(index)}
							>
								{index + 1}
							</button>{''}
							{title}
						</li>
						))}

					</ul>
					<div className={styles['buttons-container']}>
						<button
						className={styles.button}
						onClick={clickBack}
						disabled={isFirstStep}
						>Назад</button>
						<button
						className={styles.button}
						onClick={() => (isLastTep ? clickRestart() : clickForward())}
						>

							{isLastTep ? 'Начать сначала' : 'Далее' }

						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
