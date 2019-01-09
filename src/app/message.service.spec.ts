import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service : MessageService;

    beforeEach(() => {
         service = new MessageService();
    })
    it('should have no messages to start', () => {
        expect(service.messages.length).toBe(0);
    });
    it('should add message when add is called',()=>{
        service.add('msg1');
        expect(service.messages.length).toBe(1);
    });
    it('should remove message when clear is called',()=>{
        service.clear();
        expect(service.messages.length).toBe(0);
    })
})