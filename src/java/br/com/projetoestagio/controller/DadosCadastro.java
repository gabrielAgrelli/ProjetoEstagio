/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.projetoestagio.controller;

import br.com.projetoestagio.DAO.AlimentoRefeicaoDAOImpl;
import br.com.projetoestagio.DAO.CardapioDAOImpl;
import br.com.projetoestagio.DAO.RefeicaoDAOImpl;
import br.com.projetoestagio.model.AlimentoRefeicao;
import br.com.projetoestagio.model.Cardapio;
import br.com.projetoestagio.model.Refeicao;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Leticia
 */
@WebServlet(name = "DadosCadastro", urlPatterns = {"/DadosCadastro"})
public class DadosCadastro extends HttpServlet {

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

        HttpSession session = request.getSession(true);
        Cardapio cardapio = new Cardapio();
        cardapio = (Cardapio) session.getAttribute("cardapio");
        cardapio.getTipoCardapio();
        cardapio.getNomeCardapio();
        cardapio.getIntervaloCardapio();
        cardapio.getDataInicioCardapio();
        cardapio.getDataFinalCardapio();
        cardapio.getObservacaoCardapio();
        cardapio.getStatusCardapio();
        cardapio.getPaciente().getIdPaciente();

        ArrayList<Refeicao> refeicoes;
        refeicoes = (ArrayList<Refeicao>) session.getAttribute("refeicao");

        ArrayList<AlimentoRefeicao> alimentoRefeicoes;
        alimentoRefeicoes = (ArrayList<AlimentoRefeicao>) session.getAttribute("alimentorefeicao");

        if (cardapio != null) {
            try {

                CardapioDAOImpl dao = new CardapioDAOImpl();
                cardapio.setIdCardapio(dao.cadastrar(cardapio));

                for (int ii = 0; ii < refeicoes.size(); ii++) {
                    Refeicao refeicao = new Refeicao();
                    refeicao = refeicoes.get(ii);
                    refeicao.setCardapio(cardapio);

                    int idRefeicao = refeicao.getIdRefeicao();

                    RefeicaoDAOImpl daoRefeicao = new RefeicaoDAOImpl();
                    refeicao.setIdRefeicao(daoRefeicao.cadastrar(refeicao));
                    if (refeicao != null) {
                        for (int i = 0; i < alimentoRefeicoes.size(); i++) {
                            AlimentoRefeicao alimentoRefeicao = new AlimentoRefeicao();
                            alimentoRefeicao = alimentoRefeicoes.get(i);
                            alimentoRefeicao.setRefeicao(refeicao);
                            if (idRefeicao == alimentoRefeicao.getIdAlimentoRefeicao()) {
                                AlimentoRefeicaoDAOImpl daoAlimentoRefeicao = new AlimentoRefeicaoDAOImpl();
                                daoAlimentoRefeicao.cadastrar(alimentoRefeicao);
                                System.out.println("Cadastrado com sucesso");
                            }
                        }

                    }
                }

            } catch (Exception ex) {
                System.out.println("Erro ao cadastrar refeição!!!" +ex.getMessage());
                ex.printStackTrace();
            }
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
