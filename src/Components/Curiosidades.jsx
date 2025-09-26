import React, { useState, useEffect } from 'react';

const Curiosidades = () => {
    const [curiosidade, setCuriosidade] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCuriosidade = async () => {
            try {
                
                const searchUrl = 'https://world.openfoodfacts.org/cgi/search.pl';
                const params = new URLSearchParams({
                    'search_terms': 'vegetables', 
                    'page_size': 20,
                    'json': true
                });

                const response = await fetch(`${searchUrl}?${params.toString()}`);

                if (!response.ok) {
                    throw new Error(`Erro na API: ${response.status}`);
                }

                const data = await response.json();

                if (!data.products || data.products.length === 0) {
                    throw new Error('Nenhum produto encontrado para a busca.');
                }
                
                
                const randomIndex = Math.floor(Math.random() * data.products.length);
                const randomProduct = data.products[randomIndex];

                
                const productName = randomProduct.product_name || 'um produto não especificado';
                const categories = randomProduct.categories_tags ? randomProduct.categories_tags.join(', ').replace(/en:/g, '') : 'não especificadas';
                const countries = randomProduct.countries || 'um país não especificado';

                const fact = `Sabia que o "${productName}" é classificado nas categorias de "${categories}" e é originário de ${countries}?`;

                setCuriosidade(fact);
                setIsLoading(false);

            } catch (err) {
                setError('Não foi possível carregar a curiosidade. Tente novamente mais tarde.');
                setIsLoading(false);
                console.error('Erro ao buscar curiosidade:', err);
            }
        };

        fetchCuriosidade();
    }, []);

    return (
        <div className="flex justify-center items-center py-12 px-4 md:px-8 bg-red-50 min-h-[300px]">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Curiosidade Alimentar
                </h2>
                {isLoading && (
                    <p className="text-gray-600 animate-pulse">Carregando...</p>
                )}
                {error && (
                    <p className="text-red-500 font-medium">{error}</p>
                )}
                {!isLoading && !error && (
                    <p className="text-gray-800 text-lg md:text-xl italic">
                        "{curiosidade}"
                    </p>
                )}
            </div>
        </div>
    );
};

export default Curiosidades;