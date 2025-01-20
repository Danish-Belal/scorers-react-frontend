import React from 'react'
import { Input } from './ui/input';


import {
  
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"



interface socialsProfilesProps  {
      profile:String;
      control:string
}

const SocialsInputLinks = ({ profile, control}: socialsProfilesProps) => {
  
 
  // return (
  //   <div className='flex m-5'>
     
  //    Enter your {profile} Link 
  //    <div className='w-2/4 ml-10 '>
  //    <Input/>
  //    </div>
  //   </div>
  // )
  return (
    
        <FormField
          control={control}
          name={profile}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{profile}</FormLabel>
              <FormControl>
                <Input placeholder={profile} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
  )
}

export default SocialsInputLinks
