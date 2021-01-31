export interface FilterWithPagination {
    data: Array<any>;
    total: number;
    totalPages: number;
    next?: string;
    previous?: string;
  }
  const MAXIMUM_LIMIT_BY_PAGE = 20;
   
  class BaseService {
    /**
     * @param {WhereOptions} whereOption 
     * @returns {Promise<FilterWithPagination>} 
     */
    async filterWithPagination(
      whereOptions: WhereOptions,
      params: PaginationParams,
      relations: any = [],
    ): Promise<FilterWithPagination> {
      const {
        limit, skip, paginate,
      } = buildPaginator({...params, maximumLimit: MAXIMUM_LIMIT_BY_PAGE});
   
      const {count, rows} = await this.model.findAndCountAll({
        limit,
        offset: skip,
        where: whereOptions,
        include: relations,
      });
   
      return paginate(rows, count);
    }
  }


  