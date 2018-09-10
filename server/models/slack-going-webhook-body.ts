export interface SlackGoingWebHookBody {

    token: string;
    
    team_id: string;

    service_id: string;

    channel_id: string;

    channel_name: string;

    timestamp: string;

    user_id: string;

    user_name: string;

    text: string;

    trigger_word: string;
}
