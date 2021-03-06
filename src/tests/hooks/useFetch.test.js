/** 
 * @author: alexandercddev
 * @description: 
 * @date: 18/octubre/2021
**/
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Test useFetch', () => {
    
    test('should return information default', () => {
        const { result } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/characters/1`))
        
        const { data, loading, error } = result.current; 
        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null )
    });

    test('should have info success, loading false, error false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/characters/1`) );
        await waitForNextUpdate();
        
        const { data, loading, error } = result.current; 

        expect( data.length ).toBe( 1 );  
        expect( loading ).toBe( false );
        expect( error ).toBe(null);
    });

    test('should catch error message', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://reqres.in/apid/users?page=2`) );
        await waitForNextUpdate();
        
        const { data, loading, error } = result.current; 

        expect( data ).toBe( null );  
        expect( loading ).toBe( false );
        expect( error ).toBe('Not load information');
    });
    
    
});
