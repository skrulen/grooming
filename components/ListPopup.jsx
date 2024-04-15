import Link from 'next/link';
import styles from '@/styles/popup.module.css';
import { useState, useRef, useEffect } from 'react';

export function ListPopup({ props }) {

	let [popupActive, setPopupActive] = useState(false);
  const [currentLinks, setcurrentLinks] = useState([]);
	const [currentType, setcurrentType] = useState('');

	let holdsPopup;
	const popup = useRef(null);

  function showServices() {
		setcurrentLinks(props.links);
		setcurrentType(props.type);
    setPopupActive(true);
		popupHoveredHandle();
  }

	function showBreeds() {
		setcurrentLinks(props.links);
		setcurrentType(props.type);
    setPopupActive(true);
		popupHoveredHandle();
  }

	function popupHoveredHandle() {
		holdsPopup = props.holdsPopup.map(element => element.current);
		holdsPopup.push(popup.current);
		document.addEventListener('mouseover', hideOnNonHovered);
	}

	const hideOnNonHovered = (event) => {
		let isHovered = event.relatedTarget !== null && 
										holdsPopup.some(element => element && element.contains(event.target));

		if (!isHovered) {
			hidePopup();
			document.removeEventListener('mouseover', hideOnNonHovered);
		}

	}

	function hidePopup() {
    setPopupActive(false);
  }

	useEffect(() => {
		switch (props.type) {
			case 'services': showServices(); break;
			case 'breeds': showBreeds(); break;
		}
		
	}, [props])

	function formList() {
		let links;
		if (props.type !== 'none' || !currentLinks) {
			links = props.links.map((prop, index) => <li key={index} className={styles.link}><p>{ prop }</p></li>)
		} else {
			links = currentLinks.map((prop, index) => <li key={index} className={styles.link}><p>{ prop }</p></li>);
		}

		return (
			<div className={styles.popup}>
				<p className='mb-4 cursor-pointer self-start'>{ currentType === 'services' ? 'Все услуги' : 'Все породы' } →</p>
				<ul className={styles.popupList}> 
					{ links }
				</ul>
			</div>
		)
	}

	return (
		<div ref={popup} className={`${styles.popupWrapper} ${popupActive ? styles.popupActive : styles.popupInactive}`}>
			{ formList() }
    </div>
	)
}