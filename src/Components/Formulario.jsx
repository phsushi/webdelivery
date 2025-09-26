import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';

const Formulario = () => {
    const [formStatus, setFormStatus] = useState({
        success: false,
        message: '',
        error: false,
    });
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telefone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ success: false, message: '', error: false });

        try {
            const response = await fetch('https://formspree.io/f/mrbybkje', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || 'Erro ao enviar a mensagem.');
            }

            setFormStatus({ success: true, message: 'Mensagem enviada com sucesso!', error: false });
            setFormData({ name: '', email: '', telefone: '' });
        } catch (err) {
            console.error('Submission Error:', err);
            setFormStatus({ success: false, message: err.message || 'Ocorreu um erro ao enviar sua mensagem.', error: true });
        }
    };

    return (
        <Container disableGutters maxWidth="sm" sx={{ my: 8 }}>
            <Box
                sx={{
                    p: { xs: 3, md: 6 },
                    borderRadius: 3,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                }}
            >
                <Typography variant="h4" fontWeight={600} color="#333" textAlign="center" gutterBottom>
                    Entre em Contato
                </Typography>
                <Typography variant="body1" color="#666" textAlign="center" sx={{ mb: 2 }}>
                    Estamos prontos para te ajudar. Envie sua mensagem e entraremos em contato o mais rápido possível!
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            label="Seu Nome Completo"
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    '& fieldset': { borderColor: '#E0E0E0' },
                                    '&:hover fieldset': { borderColor: '#BDBDBD' },
                                    '&.Mui-focused fieldset': { borderColor: '#4CAF50' },
                                },
                            }}
                        />
                        <TextField
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            label="Seu Email"
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    '& fieldset': { borderColor: '#E0E0E0' },
                                    '&:hover fieldset': { borderColor: '#BDBDBD' },
                                    '&.Mui-focused fieldset': { borderColor: '#4CAF50' },
                                },
                            }}
                        />
                        <TextField
                            required
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            label="Seu Telefone"
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    '& fieldset': { borderColor: '#E0E0E0' },
                                    '&:hover fieldset': { borderColor: '#BDBDBD' },
                                    '&.Mui-focused fieldset': { borderColor: '#4CAF50' },
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: '#206138',
                                '&:hover': { backgroundColor: '#388E3C' },
                                mt: 2,
                                py: 1.5,
                                borderRadius: '10px',
                            }}
                        >
                            Enviar
                        </Button>
                    </Box>

                    {formStatus.success && (
                        <Alert severity="success" sx={{ mt: 2 }}>
                            {formStatus.message}
                        </Alert>
                    )}
                    {formStatus.error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {formStatus.message}
                        </Alert>
                    )}
                </form>
            </Box>
        </Container>
    );
};

export default Formulario;