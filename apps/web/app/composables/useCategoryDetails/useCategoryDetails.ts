import type { CategoryData } from '@plentymarkets/shop-api';
import type { UseCategoryDetailState, UseCategoryDetailsReturn } from './types';
import { logger } from '~/utils/logger';

export const useCategoryDetails: UseCategoryDetailsReturn = () => {
  const state = useState<UseCategoryDetailState>('useCategoriesSearch', () => ({
    data: {} as CategoryData,
    loading: false,
  }));

  const getCategory = async (categoryId: number): Promise<CategoryData> => {
    state.value.loading = true;
    try {
      const data = await useSdk().plentysystems.getCategoryById({ categoryId, with: 'details,clients' });
      const result = data.data;
      state.value.data = result ?? state.value.data;
      return result;
    } catch (error) {
      logger.error('getCategory error:', error);
    } finally {
      state.value.loading = false;
    }

    return state.value.data;
  };

  return {
    getCategory,
    ...toRefs(state.value),
  };
};
