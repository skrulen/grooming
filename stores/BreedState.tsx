import { action, makeAutoObservable } from 'mobx'

class BreedState {
  constructor() {
    makeAutoObservable(this)
  }

  breed: string | null = null
  setBreed = action((newBreed: string | null) => {

    this.breed = newBreed
    if (newBreed === null) {
      localStorage.removeItem('breed')
      return  
    }

    localStorage.setItem('breed', newBreed)
  })

}

export default new BreedState()