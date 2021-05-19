import {useMutation} from '@apollo/client';
import {useState} from 'react';
import QueryWriteUI from './QueryWrite.presenter';
import {useRouter} from 'next/router';
import {CREATE_PROFILE} from './QueryWrite.queries';
import {
  IMutation,
  IMutationCreateProfileArgs,
} from '../../../commons/types/generated/types';

interface IProfile {
  [key: string]: string;
}

// function Query() {
const QueryWrite = () => {
  const router = useRouter();
  const [createProfile, {data}] =
    useMutation<IMutation, IMutationCreateProfileArgs>(CREATE_PROFILE);
  const [profile, setProfile] = useState<IProfile>({
    name: '',
    age: '',
    school: '',
  });

  const [aaa, setAaa] = useState(false);

  const onChangeInput = (event) => {
    const newProfile: IProfile = {
      ...profile,
      [event.target.name]: event.target.value,
    };
    if (newProfile.name && newProfile.age && newProfile.school) setAaa(true);
    setProfile(newProfile);

    // profile.aaa.bbb.ccc => "철수"

    // const profile = {
    //     aaa: {
    //         bbb: {
    //             ccc: "철수"
    //         }
    //     }
    // }
  };

  // async function aaa(){

  // }

  const onClickSubmit = async () => {
    try {
      const result = await createProfile({
        variables: {
          ...profile,
          age: Number(profile.age),
        },
      });
      alert(result.data.createProfile.message);
      router.push(`/query/${profile.name}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <QueryWriteUI
      onClickSubmit={onClickSubmit}
      onChangeInput={onChangeInput}
      aaa={aaa}
    />
  );
};

export default QueryWrite;
