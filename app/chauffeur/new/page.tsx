'use client' // Important pour activer le rendu côté client avec React dans Next.js

import React, { useState } from 'react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup // Ajoute SelectGroup ici
} from '@/components/ui/select'  // Assure-toi que le chemin est correct selon ton structure de projet

const ChauffeurNew = () => {
  const [location, setLocation] = useState('')
  const [destination, setDestination] = useState('')

  const locations = ['Tunis', 'Sfax', 'Sousse', 'Nabeul', 'Kairouan']
  const destinations = ['Tunis', 'Sfax', 'Sousse', 'Nabeul', 'Kairouan']

  const handleConfirm = () => {
    if (location && destination) {
      console.log(`Voyage confirmé ! De ${location} vers ${destination}`)
      // Logique d'enregistrement ou d'envoi de ces données
    } else {
      alert('Veuillez sélectionner l\'emplacement et la destination.')
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Nouveau voyage</h2>

      {/* Sélection de l'emplacement */}
      <div className="mb-4">
        <Select onValueChange={setLocation} value={location}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre emplacement" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup> {/* Ajout de SelectGroup */}
              <SelectLabel>Choisir l'emplacement</SelectLabel>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Sélection de la destination */}
      <div className="mb-4">
        <Select onValueChange={setDestination} value={destination}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez la destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup> {/* Ajout de SelectGroup */}
              <SelectLabel>Choisir la destination</SelectLabel>
              {destinations.map((dest) => (
                <SelectItem key={dest} value={dest}>
                  {dest}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <button
        onClick={handleConfirm}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Confirmer le voyage
      </button>
    </div>
  )
}

export default ChauffeurNew
