/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.projetoestagio.controller;

import br.com.projetoestagio.DAO.ExercicioDAOImpl;
import br.com.projetoestagio.DAO.GenericDAO;
import br.com.projetoestagio.model.Avaliacao;
import br.com.projetoestagio.model.Exercicio;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Grazy Martins
 */
@WebServlet(name = "AlterarExercicio", urlPatterns = {"/AlterarExercicio"})
public class AlterarExercicio extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String mensagem = null;
        
        String nomeExercicio = request.getParameter("nomeexercicio");
        String tipoExercicio = request.getParameter("tipoexercicio");
        String frequenciaExercicio = request.getParameter("frequenciaexercicio");
        Double totalHorasExercicio = Double.parseDouble(request.getParameter("totalhorasexercicio"));
        String intensidadeExercicio = request.getParameter("intensidadeexercicio");
        Boolean statusExercicio = request.getParameter("statusexercicio") != null;
        //Integer sincronizaExercicio = Integer.parseInt(request.getParameter("sincronizaexercicio"));
        Integer idAvaliacao = Integer.parseInt(request.getParameter("idavaliacao"));
        Integer idExercicio = Integer.parseInt(request.getParameter("idexercicio"));
        
        Avaliacao avaliacao = new Avaliacao();
        avaliacao.setIdAvaliacao(idAvaliacao);

        Exercicio exercicio = new Exercicio();
        exercicio.setIdExercicio(idExercicio);
        exercicio.setNomeExercicio(nomeExercicio);
        exercicio.setTipoExercicio(tipoExercicio);
        exercicio.setFrequenciaExercicio(frequenciaExercicio);
        exercicio.setTotalHorasExercicio(totalHorasExercicio);
        exercicio.setIntensidadeExercicio(intensidadeExercicio);
        exercicio.setSincronizaExercicio(1);
        exercicio.setAvaliacao(avaliacao);
        

        if(statusExercicio == true){
            exercicio.setStatusExercicio("A");
        }else{
            exercicio.setStatusExercicio("I");
        }

        try {
            GenericDAO dao = new ExercicioDAOImpl();
            if (dao.alterar(exercicio)) {
                mensagem = "Alterado com Sucesso";
            } else {
                mensagem = "Erro ao ser Alterado";
            }

            request.setAttribute("msg", mensagem);
            request.getRequestDispatcher("CarregarExercicio").forward(request, response);
        } catch (Exception ex) {
            System.out.println("Erro ao alterar Exercicio na Servlet" + ex.getMessage());
            ex.printStackTrace();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
