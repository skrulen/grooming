import Link from 'next/link';
import styles from '@/styles/listPopup.module.css';
import { useState, useEffect } from 'react';

export function ListPopup({ props }) {

	let [listPopup, setListPopup] = useState(false);

  function showListPopup() {
    setListPopup(true);
		console.log('привет');
  }

	function hideListPopup() {
    setListPopup(false);
		console.log('пока');
  }

	const hovServices = props.activatesPopup[0];

	useEffect(() => {
		if (hovServices !== null) hovServices.current.addEventListener('mouseover', showListPopup);
	}, [])

	useEffect(() => {
		if (hovServices !== null) hovServices.current.addEventListener('mouseout', hideListPopup);
	}, [])
	
	console.log(listPopup)

	return (
		<div className={`${styles.listPopupWrapper} ${listPopup ? styles.listPopupActive : styles.listPopupInactive}`}>
      <ul className={styles.listPopup}>
				{ props.links.map((prop) => <li>{prop}</li>) }
      </ul>
    </div>
	)
}













/*	
	const [hoverable, setHoverable] = useState(null);
  const [listElement, setListElement] = useState(null);
  const [gap, setGap] = useState(null);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    setHoverable(document.querySelector('.hoverable'));
    setListElement(document.querySelector('.listElement'));
    setGap(document.querySelector('.gap'));
    setPopup(document.querySelector('.listPopup'));
		if (hoverable !== null) hoverable.addEventListener('mouseover', showListPopup);
  }, []);
	*/

