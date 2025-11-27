import Client from '../../../api/index';

export const getOfferServices = async (id: string, data: any) => {
    try {
        const response = await Client.candidate.updateOffer(id, data);
        if (response) return response;
    } catch (error) {
        return error;
    }
};