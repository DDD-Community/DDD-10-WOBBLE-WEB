import { isAxiosError } from 'axios';
import axiosInstance from '..';

type CreateUserProfileRequestDto = {
  name: string;
  nickname?: string;
  gender: '남성' | '여성';
  birth: string;
  profileImageUrl?: string;
  questions: Array<{
    id: number;
    sid: string;
    question: string;
    questionType: string;
    answers: string[];
  }>;
};

export async function createUserProfile(dto: CreateUserProfileRequestDto) {
  try {
    const response = await axiosInstance.post('v1/profiles/user', dto);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      return error.response;
    }
  }
}