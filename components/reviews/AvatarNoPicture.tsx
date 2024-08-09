interface Props {
  styles: any
}

export function AvatarNoPicture( props: Props ) {
  console.log(props)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" className={props.styles}><rect width="180" height="180" fill="#dee3e7"></rect><path fill="#fff" d="M180.1,180H.175c-1.852-55.63,43.518-52.963,66.3-66.3,6.351-3.718,7.053-13.828,3.259-19.26C55.448,74,54.026,62.148,55.8,44.667c2.908-28.594,31.408-29.926,31.408-29.926h5.852s28.5,1.332,31.407,29.926c1.778,17.481.356,29.333-13.925,49.777-3.8,5.432-3.093,15.542,3.259,19.26C136.582,127.037,181.953,124.37,180.1,180Z"></path></svg>
  )
}