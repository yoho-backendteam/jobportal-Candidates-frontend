import Client from '../../../api/index';

export const getTimelineServices = async (id: string) => {
    try {
        const response = await Client.candidate.timeLine(id);
        if (response) return response;
    } catch (error) {
        return error;
    }
};