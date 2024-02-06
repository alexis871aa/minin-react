import Header from './components/Header/Header';
import WayToTeach from './components/WayToTeach/WayToTeach';
import Button from './components/Button/Button';
import { useState } from 'react';
import { ways, differences } from './data';

export const App = () => {
	const [contentType, setContentType] = useState(null);

	// let content = 'Нажми на кнопку';

	function handleClick(type) {
		setContentType(type);
		// content = type;
	}

	return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Наш подход к обучению</h3>

					<ul>
						<WayToTeach
							title={ways[0].title}
							description={ways[0].description}
						/>
						<WayToTeach {...ways[1]} />
						<WayToTeach {...ways[2]} />
						<WayToTeach {...ways[3]} />
					</ul>
				</section>
				<section>
					<h3>Чем мы отличаемся от других</h3>

					<Button onClick={() => handleClick('way')}>Подход</Button>
					<Button onClick={() => handleClick('easy')}>Доступность</Button>
					<Button onClick={() => handleClick('program')}>Концентрация</Button>

					<p>{differences[contentType]}</p>
				</section>
			</main>
		</div>
	);
};
